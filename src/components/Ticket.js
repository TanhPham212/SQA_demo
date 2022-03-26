import styled from 'styled-components';
import Movie from './Movie';
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const API_KEY = '908eafe3';
const Header=styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  background-color:#603bbb;
  color:white;
  padding: 10px;
  align-items: center;
  font-size:25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 9 #555;
`;

const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const MovieImage= styled.img`
width:48px;
height: 48px;
margin: 15px;
`

const MovieList= styled.div`
  display: flex;
  gap: 25px;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
`

const Ticket= ({handleLogout}) => {
  return (
    <Container>
      <Header>
        <AppName>
          <MovieImage src='https://icon-library.com/images/free-movies-icon/free-movies-icon-16.jpg'></MovieImage>
          React Movie Ticket System
        </AppName>
        <div> 
        <button className='logout' onClick={handleLogout}>Logout</button>
        </div>
      </Header>
      <MovieList>
        <a href='pick_seat.html'><Movie /></a>
        <a ><Movie /></a>
        <a ><Movie /></a>
        <a ><Movie /></a>
        <a ><Movie /></a>
        <a ><Movie /></a>
      </MovieList>
    </Container>
  );
}

export default Ticket;
