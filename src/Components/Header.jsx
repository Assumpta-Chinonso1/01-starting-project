   import logoImg from '../assets/logo.jpg'
   import Button from '../UI/Button.jsx'

export default function Header() {

    return <header id="main-header">
          <div id="title">
            <img src={logoImg} alt="" />
             <h1>Susu's Kitchen</h1>
          </div>
          <p>
            <Button textOnly>Cart (0)</Button>
          </p>
    </header>
    
}