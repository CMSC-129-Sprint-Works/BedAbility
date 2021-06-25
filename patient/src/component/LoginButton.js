function LoginButton(props) {
  return (
    
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="submit" className="btn btn-success btn-lg btn-block" onClick  = {props.login} values = {props.values}>Login</button>
    </div>
  );
}

export default LoginButton;