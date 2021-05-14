const { Post } = require('../models');

const postData = [
  {
    title: 'What is Dogecoin?',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta lorem in sapien pulvinar mollis. Aenean non lacus lobortis, rutrum ante sed, ornare magna. Phasellus tellus sem, fringilla at enim at, egestas accumsan elit. Quisque ut urna sed turpis commodo eleifend. Pellentesque fringilla semper metus sed imperdiet. Sed ullamcorper dapibus dolor sed cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque non eleifend nisl, a aliquet lectus. Vestibulum at justo sit amet metus consequat sodales eu et erat. Sed fermentum nec tellus id tempus. Pellentesque at purus in velit scelerisque pulvinar. Vivamus vulputate orci neque, vel volutpat magna dapibus suscipit. Nullam venenatis lacus ullamcorper, convallis tortor sed, pretium tellus.',
    author_id: 1
  },
  {
    title: 'Teaching AIs to Forget',
    body: 'Aenean dolor diam, sodales quis elit molestie, aliquet bibendum neque. Proin nec porta risus, et gravida nulla. In hac habitasse platea dictumst. Cras sit amet magna erat. Mauris sagittis non massa ac cursus. Cras ornare aliquam urna id molestie. Fusce purus lorem, egestas eget bibendum ac, tincidunt eget ipsum. Praesent tincidunt massa sapien, et malesuada ante egestas eu. Morbi finibus ex dolor, sit amet hendrerit nunc interdum eget.',
    author_id: 1
  },
  {
    title: 'Students Sue Lambda School',
    body: 'Phasellus metus neque, scelerisque quis eros ac, rutrum bibendum lacus. Pellentesque tempus ultrices volutpat. Nunc eu feugiat nunc. Aliquam interdum rutrum ultricies. Curabitur ut ex rutrum, imperdiet velit in, fringilla eros. Curabitur imperdiet vel felis ultricies scelerisque. Quisque non nulla scelerisque, tempor lacus mollis, dapibus sapien. Quisque sem orci, eleifend id aliquam ullamcorper, vulputate mattis massa. Nam convallis nulla vel lorem porta dictum. Etiam ac sodales erat. Morbi nec iaculis turpis. Sed suscipit sodales vehicula.',
    author_id: 2
  },
  {
    title: 'Fisker-Foxxconn EV Partnership',
    body: 'Proin rhoncus nisi eros, quis sollicitudin justo placerat eget. Etiam orci augue, vulputate quis fringilla id, laoreet eget ipsum. Nunc rutrum volutpat consectetur. Cras ultricies dui id rhoncus consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis et ligula lobortis, sagittis lorem et, pellentesque felis. In non felis vehicula odio ullamcorper suscipit id in velit. Suspendisse sit amet tristique elit. Vestibulum ut leo non leo aliquet finibus. Donec quis eleifend massa, quis laoreet quam. Aenean id consectetur nulla.',
    author_id: 3
  },
  {
    title: 'How to Seed a Database',
    body: 'Curabitur luctus lobortis ex in eleifend. Cras a magna nec turpis scelerisque aliquet. Nam a dolor massa. Pellentesque eu consequat odio, id vehicula enim. Donec semper nec dui nec dignissim. Nulla magna tortor, congue vitae odio in, efficitur ultrices dolor. Aenean vitae eros vitae odio volutpat sagittis. Fusce malesuada sed ipsum non elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis auctor faucibus est, a tempus neque pulvinar eu. Duis bibendum metus est, ac sagittis augue sollicitudin commodo. Suspendisse convallis enim a turpis mollis porttitor. Nulla ante velit, congue gravida metus at, elementum lobortis orci. Mauris vestibulum quis dui a posuere.',
    author_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;