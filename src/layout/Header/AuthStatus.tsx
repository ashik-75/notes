function AuthStatus() {
  const user = true;

  if (!user) {
    return <div>User not logged in</div>;
  }
  return <div>Authen ticated</div>;
}

export default AuthStatus;
