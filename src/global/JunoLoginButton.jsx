import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { signIn, signOut, authSubscribe } from "@junobuild/core";

export default function JunoLoginButton() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = authSubscribe((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe?.();
  }, []);

  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (error) {
      console.error("Login gagal:", error);
      alert("Login gagal!");
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Logout gagal:", error);
      alert("Logout gagal!");
    }
  };

  return (
    <div className="d-flex align-items-center gap-2">
      {user ? (
        <>
          <span>👤 {user.key.split("@")[0]}</span>
          <Button variant="danger" size="sm" onClick={handleSignOut}>
            Logout
          </Button>
        </>
      ) : (
        <Button variant="primary" onClick={handleSignIn}>
          Login dengan II
        </Button>
      )}
    </div>
  );
}
