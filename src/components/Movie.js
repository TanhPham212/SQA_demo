import styled from "styled-components"
const MovieList =styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 280px;
    box-shadow: 0 3px 10px 0 #aaa;
    cursor: pointer;
`
const Poster= styled.img`
    object-fit: cover;
`

const Name= styled.span`
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin: 15px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
const TimeShowing= styled.div`
    display: flex;
    flex-direction: row;
    font-size: 16px;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-transform: capitalize;
    text-overflow: ellipsis;
`

const Movie = (props) => {
    return <MovieList >
               <Poster src="https://upload.wikimedia.org/wikipedia/vi/9/9b/Eternals_%28film%29_poster.jpeg"/>
                <Name>Eternals</Name>
                <TimeShowing>
                    <span>22/03/2022</span>
                </TimeShowing>
            </MovieList>
}
export default Movie;