import React, { useState, useCallback } from 'react'

type User = {
  email: string
  password: string
}

export default function EXERCISE03() {
  const [formData, setFormData] = useState<User>({
    email: "",
    password: ""
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", formData);
  }, [formData]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label><br />
        <input
          type="email"
          name="email"
          placeholder="abc@gmail.com"
          value={formData.email}
          onChange={handleChange}
        /><br />

        <label>Password</label><br />
        <input
          type="password"
          name="password"
          placeholder="**********"
          value={formData.password}
          onChange={handleChange}
        /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
