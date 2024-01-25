import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '541361596a654e1083ccf3d8df65df89',
  },
});
