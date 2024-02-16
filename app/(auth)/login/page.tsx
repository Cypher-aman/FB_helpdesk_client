'use client';
import { GQLClient } from '@/clients/api';
import { LoginQuery } from '@/graphql/queries/user';
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onSubmit = async (e: React.SyntheticEvent) => {
    try {
      e.preventDefault();
      const { signin: token } = await GQLClient.request(LoginQuery, {
        payload: formData,
      });

      if (!token) {
        return toast.error('Invalid credentials');
      }

      window.localStorage.setItem('helpdesk_token', token);

      router.push('/page');
    } catch (error: any) {
      return toast.error('Invalid credentials');
    }
  };

  return (
    <div className="w-screen h-screen bg-blue-900 flex justify-center items-center">
      <div className="p-6 max-w-[300px] w-full rounded-xl bg-white flex-col justify-center items-center">
        <h1 className="py-4 font-semibold text-center">
          Login to your account
        </h1>
        <form
          className="flex text-sm font-medium flex-col "
          onSubmit={(e) => onSubmit(e)}
        >
          <label htmlFor="email">Email</label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="border outline-blue-900 border-gray-400 px-2 p-1 rounded mb-3"
            type="email"
            placeholder="john.doe@example.com"
          />
          <label htmlFor="password">Password</label>
          <input
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
            className="border outline-blue-900 border-gray-400 px-2 p-1 rounded mb-3"
            type="password"
            placeholder="**********"
          />
          <button
            type="submit"
            className="bg-blue-900 my-4 text-white p-2 rounded"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center">
          New to Helpdesk?{' '}
          <Link className="text-blue-800" href="/signup">
            Sign Up
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default Login;
