const { Comment } = require('../models');

const commentData = [
  {
    comment: 'Quisque ut lacinia elit.',
    author_id: 4,
    post_id: 1
  },
  {
    comment:'Aliquam tincidunt velit id turpis efficitur, in porta purus rutrum. Ut interdum dolor turpis, at blandit ipsum dictum vel.',
    author_id: 3,
    post_id: 1
  },
  {
    comment: 'Phasellus eu sagittis arcu, at varius erat. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    author_id: 1,
    post_id: 1
  },
  {
    comment: 'Nulla pulvinar, augue vel ultricies tristique, augue urna lobortis sem, ut porta mauris diam eget enim!!!!!',
    author_id: 5,
    post_id: 3
  },
  {
    comment: 'Curabitur et nunc egestas, imperdiet mauris viverra, luctus leo.',
    author_id: 2,
    post_id: 5
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;