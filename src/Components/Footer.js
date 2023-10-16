import React from "react";
import './Footer.css';


class Footer extends React.Component{
    render(){
        return(
            <div className="Footer">
                <p className="texto_footer">{this.props.texto}</p>
            </div>
        );
    }
}

Footer.defaultProps = {
    texto:"RickAndMorty.com"
}

export default Footer;