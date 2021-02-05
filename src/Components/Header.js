function Header({navLinks}){    
    const resultHTML =[];

    navLinks.forEach(({id,title}) => {
        resultHTML.push(<a href="#" key={id}>{title}</a>)        
    });

    return( <>
        <header>
          <div className="logo">ERBAY</div>
          <nav>
            {resultHTML}
          </nav>
        </header>        
        </>
    );
}

export default Header