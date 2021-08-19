import { NextFunction, Request, Response} from 'express';
import {get, controller, bodyValidaor, post} from './decorators';




@controller('/auth')
class LoginControler {
  @get('/login')
  getLogin(req: Request, res: Response): void{
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email"/>
        </div>
        <div>
          <label>Password</label>
          <input name="password"  type="password" />
        </div>
        <button>Submit</button>
      </form>
    `)
  };

  @post('/login')
  @bodyValidaor('email', 'password')
  postLogin(req: Request, res: Response){
    const {email, password} = req.body;
  
  
  if(email && password && email === 'em1' && password === 'pas1'){
    req.session = { loggedIn: true}
    res.redirect('/');
    
  }else {
    res.send('Invalid an email or password')
  }
  
  };
}

