import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { User, LogOut, ChevronRight } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import EditValueModal from "../components/EditValueModal";
import { fetchProfile } from "../hooks/supabase.api";
import { RealCostContext } from "../context/RealCostContext";

type Modal = "monthly" | "hourly" | null;

const Profile = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [modal, setModal] = useState<Modal>(null);
  const context = useContext(RealCostContext);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchProfile();
      if (response) context?.setValue((prev) => ({ ...prev, monthly: response.monthly, hourly: response.hourly }));
    }
    fetchData();
  }, [context]);

  if (!context) return null;

  const { value, setValue } = context;

  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="flex flex-col items-center gap-3 py-4">
        <div className="w-20 h-20 rounded-full bg-dark flex items-center justify-center">
          <User size={36} className="text-white" />
        </div>
        <div className="text-center">
          <p className="font-black text-xl text-dark">{auth?.user?.user_metadata?.name ?? "Your Name"}</p>
          <p className="text-sm text-muted">{auth?.user?.email}</p>
        </div>
      </div>

      <div>
        <p className="text-xs tracking-widest uppercase font-bold text-muted mb-2 px-1">Salary</p>
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <button onClick={() => setModal("monthly")} className="w-full flex items-center justify-between px-4 py-4 border-b border-border">
            <span className="font-bold text-dark">Monthly salary</span>
            <div className="flex items-center gap-2">
              <span className="text-muted font-bold">€{value?.monthly}</span>
              <ChevronRight size={16} className="text-subtle" />
            </div>
          </button>
          <button onClick={() => setModal("hourly")} className="w-full flex items-center justify-between px-4 py-4">
            <span className="font-bold text-dark">Hourly rate</span>
            <div className="flex items-center gap-2">
              <span className="text-muted font-bold">€{value?.hourly}</span>
              <ChevronRight size={16} className="text-subtle" />
            </div>
          </button>
        </div>
      </div>

      <button
        onClick={async () => {
          await auth?.signOut();
          navigate("/login");
        }}
        className="w-full flex items-center justify-center gap-2 bg-card border border-border rounded-xl py-4 text-accent font-black"
      >
        <LogOut size={18} />
        Log out
      </button>

      {modal === "monthly" && <EditValueModal label="monthly" field={modal} value={value} setValue={setValue} onClose={() => setModal(null)} />}
      {modal === "hourly" && <EditValueModal label="hourly" field={modal} value={value} setValue={setValue} onClose={() => setModal(null)} />}
    </div>
  );
};

export default Profile;
