import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.25rem;
  p{
    font-size: 1.125rem;
    line-height: 1.75rem;
    color:#334155;
    text-overflow: ellipsis;
  }
  
  div{
    flex-shrink: 0;
    img{
      border-radius: 0.5rem
      object-fit: cover;
      object-position: center;
    }
  }
`;

const Card = ({ title, image }: { title: string; image: string }) => {
  return (
    <StyledCard>
      <div>
        <img src={image} alt={title} width={100} height={100} />
      </div>
      <p>{title}</p>
    </StyledCard>
  );
};

export default Card;
