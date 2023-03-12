import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page of my website.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum est vel ex hendrerit, ut dapibus metus sodales. Donec eu enim a massa vestibulum lobortis. Nunc et purus vel turpis venenatis maximus eget sed neque. Donec eu nisi at neque faucibus mollis. Fusce quis libero vitae lectus hendrerit tristique. Curabitur in mauris eget lectus feugiat volutpat.</p>
      <p>Morbi sollicitudin tristique lobortis. Aliquam erat volutpat. Sed convallis nisl ac nibh dictum, non sagittis velit sodales. Pellentesque vel faucibus tellus. Nunc non ante et ante cursus ullamcorper. Fusce vestibulum metus a lacinia rutrum. Phasellus eget risus ut risus commodo consectetur. Sed volutpat ultricies blandit. Integer ut libero purus.</p>
      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default About;
