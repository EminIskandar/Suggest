import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux' 
import { 
    Container, Left, Visited, Icon, Count, Description,
    Title, Text, Category, Right, CommentsCount, Item
} from './styled'

export default function Index() {
    const suggests = useSelector(state => state.suggests)
    const [datas, setDatas] = useState([])
   

    useEffect(() => {
         setDatas(suggests.payload)
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [suggests]) 
   
    return (
        <Container>
            {
                datas ?  
                datas.map( ( {upvotes, description, title, category, comments}, index ) => {
                    return <Item key={index}>
                                <Left>
                                    <Visited>
                                        <Icon>
                                            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                                        </Icon>
                                        <Count>{upvotes}</Count>
                                    </Visited>
                                    <Description>
                                        <Title>{title}</Title>
                                        <Text>{description}</Text>
                                        <Category>{category}</Category>
                                    </Description>
                                </Left>
                                <Right>
                                    <CommentsCount>
                                        <Icon>
                                            <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fillRule="nonzero"/></svg>
                                        </Icon>
                                        <Count>{comments.length}</Count>
                                    </CommentsCount>
                                </Right> 
                            </Item>
                }): null
            }
             
        </Container>
    )
}
