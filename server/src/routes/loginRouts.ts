import {Router, Request, Response, NextFunction} from 'express';


export interface RequestWithBody extends Request {
  body: {[key: string]: string | undefined}
}


const router = Router();


router.get('/login', (req: Request, res: Response) => {
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
});








export { router};