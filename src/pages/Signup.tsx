import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import AuthInput from "../components/AuthInput";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const err = await auth?.signUp(form.email, form.password, form.name);
    setLoading(false);
    if (!err) {
      navigate("/");
      return;
    }
    if (err.startsWith("Check your email")) {
      setConfirmed(true);
      return;
    }
    setError(err);
  };

  if (confirmed)
    return (
      <div className="min-h-screen bg-dark flex flex-col items-center justify-center px-6 gap-4 text-center">
        <span className="text-5xl">✉️</span>
        <h1 className="text-white font-black text-2xl">Check your email</h1>
        <p className="text-dark-muted text-sm">
          We sent a confirmation link to{" "}
          <span className="text-white font-bold">{form.email}</span>. Click it
          to activate your account.
        </p>
        <Link to="/login" className="text-accent font-bold text-sm mt-2">
          Back to login
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-dark flex flex-col justify-between px-6 py-12">
      <div>
        <span className="font-black text-xl tracking-tight text-white">
          Cost
        </span>
        <span className="font-black text-xl tracking-tight text-accent">
          ly
        </span>
      </div>

      <div className="flex flex-col gap-10">
        <div>
          <p className="text-xs tracking-widest uppercase font-bold text-dark-muted mb-3">
            Create account
          </p>
          <h1 className="text-white font-black text-4xl leading-tight">
            Know what things
            <br />
            <span className="text-accent italic">really cost.</span>
          </h1>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <AuthInput
            label="Name"
            name="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            autoComplete="name"
            onChange={handleChange}
          />
          <AuthInput
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            autoComplete="email"
            onChange={handleChange}
          />
          <AuthInput
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={form.password}
            autoComplete="new-password"
            onChange={handleChange}
          />
          {error && <p className="text-accent text-sm font-bold">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="bg-accent text-white font-black text-base rounded-xl py-4 mt-2 active:scale-95 transition-transform disabled:opacity-50"
          >
            {loading ? "Creating account…" : "Create account"}
          </button>
        </form>
      </div>

      <p className="text-center text-dark-muted text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-accent font-bold">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default Signup;
