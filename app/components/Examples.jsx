var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Example locations to try out!</p>
      <ol>
        <li>
          <Link to='/?location=Turku'>Turku, Finland</Link>
        </li>
        <li>
          <Link to='/?location=Stockholm'>Stockholm, Sweden</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
                          
                          
                          
                          
                          
                          
                          
                          
    
