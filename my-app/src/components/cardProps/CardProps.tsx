interface CardPropsType {
  id: number;
  age: string;
  face: string;
  title: string;
  description: string;
  url: string;
}

const CardProps: React.FC<CardPropsType> = ({age, face, title, description, url}) => {
  return (
    <div></div>
  )
}

export default CardProps