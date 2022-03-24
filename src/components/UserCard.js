import React from 'react';
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import { deselectUser } from '../redux/userSlice';

const CardContainer = styled.div`
  width: 200px;
  border: 1px solid black;
  border-radius: 10px;
  padding: .5em;
  postion: relative;
  margin: 10px;
`
const ProfileInfo = styled.div`
  font-size: .9em;
  margin-top: 1em;
`
const CloseButton = styled.span`
  font-weight: 700;
  float: right;
  cursor: pointer;
`
const NameDiv = styled.div`
  font-weight: 700;
  font-size: 1.2em;
  margin-top: .5em;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function UserCard({company, name, position, profile, id}) {
  const dispatch = useDispatch();
  const { age, gender, planet, species, status } = profile
  return (
		<CardContainer>
			<CloseButton onClick={() => dispatch(deselectUser(id))}>X</CloseButton>
			<NameDiv>{name}</NameDiv>
			{position} at {company}
			<ProfileInfo>
				<Row>
					<div>
						{age}, {gender}
					</div>
					<div>Planet {planet}</div>
				</Row>
				<Row>
					<div>{species}</div>
					<div>status: {status}</div>
				</Row>
			</ProfileInfo>
		</CardContainer>
	);
}
