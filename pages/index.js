import Header from '../components/Header';
import { Link } from '../routes';
import axios from 'axios';

const Index = ({ posts = [] }) => {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/portfolios/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Index.getInitialProps = async () => {
  const response = await axios(`https://jsonplaceholder.typicode.com/posts`);
  const posts = response.data;
  return { posts };
};

export default Index;
