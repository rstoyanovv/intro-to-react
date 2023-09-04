let rootElement = document.getElementById('root');

let reactElement = (
    <div>
        <header>
            <h1>
                This is React
            </h1>
            <h2>
                And it is the best framework
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis odio. 
            Vivamus quis mi sit amet odio convallis cursus a eget ligula. Phasellus non 
            sapien nec elit varius iaculis vel id libero.
            </p>
        </header>
    </div>
);

ReactDOM.render(reactElement, rootElement);