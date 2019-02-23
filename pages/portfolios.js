import Header from '../components/Header';
import axios from 'axios';

const Portfolios = ({ post }) => {
  return (
    <div>
      <Header />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Portfolios.getInitialProps = async ({ query }) => {
  const response = await axios(
    `https://jsonplaceholder.typicode.com/posts/${query.id}`
  );
  const post = response.data;
  return { post };
};

export default Portfolios;
