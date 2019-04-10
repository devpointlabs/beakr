import React from "react";
import styled from "styled-components";

const LeftEnrollmentUser = ({result, createEnrollment, selectedCourseId, updateSearch}) => {
    if(result.role === "student" || result.role === "staff" )
        return (
            <EnrolledUserContainer>
                { result.first_name } { result.last_name } 
                <RoleText> ({ result.role }) </RoleText>
            </EnrolledUserContainer>
        )
    else return (
        <UserContainer onClick={() => createEnrollment(result.id, selectedCourseId)} >
            { result.first_name } { result.last_name } 
            <PlusContainer>+</PlusContainer>
        </UserContainer>
    )
}

const UserContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.5rem;
    border-bottom: 1px solid rgba(100,100,100, 0.1);
    cursor: pointer;
    transition-duration: 0.1s;

    :hover {
        background-color: rgba(100,100,100, 0.1);
        color: #23a24d;
    }
`
const EnrolledUserContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.5rem;
    border-bottom: 1px solid rgba(100,100,100, 0.1);
`

const PlusContainer = styled.button`
    position: relative;
    height: 1.25rem;
    width: 1.25rem;
    padding: 0;
    background-color: #23a24d;
    color: white;
    border: none;
    border-radius: 100px;
    margin-left: 0.5rem;
    cursor: pointer;
`

const RoleText = styled.div`
    color: #0029ff;
    margin-left: 0.5rem;
    font-size: 0.75rem;
`


export default LeftEnrollmentUser;