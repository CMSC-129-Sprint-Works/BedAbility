import {Card} from 'react-bootstrap';

function LogoutButton(props) {
  return (
    <Card className = "App-account">
        <h1 className = "App-title">Are you sure you want to logout?</h1><br/>
      <Card.Body className="text-center">
         <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" className="btn btn-success btn-lg btn-block" onClick  = {props.login}>Cancel</button>
          <button type="submit" className="btn btn-success btn-lg btn-block" onClick  = {props.logout}>Logout</button>
        </div>
        );
      </Card.Body>
    </Card>
  );
}

export default LogoutButton;