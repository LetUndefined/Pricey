import { supabase } from "../lib/supabase";
import type { LifeItem } from "../interface";

async function getUserId() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user?.id ?? null;
}

export async function fetchLifeItems() {
  const userId = await getUserId();
  if (!userId) return [];
  const { data } = await supabase.from("life_items").select("id, name, original_price, icon").eq("profile_id", userId);
  return data ?? [];
}

export async function insertLifeItem(item: LifeItem) {
  const userId = await getUserId();
  if (!userId) return null;
  const { data, error } = await supabase
    .from("life_items")
    .insert({
      profile_id: userId,
      name: item.name,
      original_price: item.originalPrice,
      icon: item.icon,
    })
    .select("id")
    .single();
  if (error) return null;
  return data.id;
}

export async function deleteLifeItem(id: string) {
  await supabase.from("life_items").delete().eq("id", id);
}

export async function fetchProfile() {
  const userId = await getUserId();
  if (!userId) return null;
  const { data } = await supabase.from("profiles").select("monthly, hourly").eq("id", userId).single();
  return data;
}

export async function updateProfile(monthly: number, hourly: number) {
  const userId = await getUserId();
  if (!userId) return;
  await supabase.from("profiles").update({ monthly, hourly }).eq("id", userId);
}
