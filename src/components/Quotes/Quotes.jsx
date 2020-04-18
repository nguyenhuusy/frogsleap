import React, { Component } from 'react';
import './Quotes.scss';
class Quotes extends Component {
    render() {
        return (
            <div className="quotes">
                <div className="quotes-left">
                    <img className="quotes-left-img" src="https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg" alt="#"></img>
                </div>
                <div className="quotes-right">
                    <i class="fas fa-quote-left"></i>
                    <div className="quotes-right-content">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit"</div>
                    <div className="quotes-right-name">Nguyen Thi A</div>
                    <div className="quotes-right-position">Positon</div>
                </div>
            </div>
        )
    }
}

export default Quotes;