import React from "react";

class Footer extends React.Component {
    render() {
        return(
            <div class="card mx-auto border-primary">
                <div class="card-header">
                    Inspirational Quote
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                    <p>If you can dream it, you can achieve it.</p>
                    <footer class="blockquote-footer"> Zig Ziglar <cite title="Source Title">www.quotespedia.org</cite></footer>
                    </blockquote>
                </div>
            </div>
        );
    }
}

export default Footer;