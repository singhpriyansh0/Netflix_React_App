 import './Content.css';
 import Row from '../row/Row';
import RowData from '../../constants/URLS';

 export default function Content() {
  
  return (<div className='content-wrapper'>
    {RowData.map((el) => {
      return <Row title={el.title} url={el.url} />
    })}
  </div>
  );
  
}
 

