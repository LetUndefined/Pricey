import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import AuthInput from "../components/AuthInput";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const err = await auth?.signIn(form.email, form.password);
    setLoading(false);
    if (err) {
      setError(err);
      return;
    }
    navigate("/");
  };

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
            Welcome back
          </p>
          <h1 className="text-white font-black text-4xl leading-tight">
            See prices in
            <br />
            <span className="text-accent italic">your real life.</span>
          </h1>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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
            autoComplete="current-password"
            onChange={handleChange}
          />
          {error && <p className="text-accent text-sm font-bold">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="bg-accent text-white font-black text-base rounded-xl py-4 mt-2 active:scale-95 transition-transform disabled:opacity-50"
          >
            {loading ? "Logging in…" : "Log in"}
          </button>
        </form>
      </div>

      <p className="text-center text-dark-muted text-sm">
        No account yet?{" "}
        <Link to="/signup" className="text-accent font-bold">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
