var rootElement = document.getElementById('root');

var reactElement = React.createElement(
    'div',
    null,
    React.createElement(
        'header',
        null,
        React.createElement(
            'h1',
            null,
            'This is React'
        ),
        React.createElement(
            'h2',
            null,
            'And it is the best framework'
        ),
        React.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis odio. Vivamus quis mi sit amet odio convallis cursus a eget ligula. Phasellus non sapien nec elit varius iaculis vel id libero.'
        )
    )
);

ReactDOM.render(reactElement, rootElement);