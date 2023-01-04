import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return <div>
      {characters.map((info)=> 
      <Card  name= {info.name}
             species = {info.species}
             gender ={info.gender}
             image ={info.image}
             onClose = {() => info.onClose()}/> )
      
      }

   </div>;
}
