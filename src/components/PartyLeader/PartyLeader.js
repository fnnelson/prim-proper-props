function PartyLeader(props) {
    return (
        <>
            <h2>Party Leader</h2>
            {props.leader && <h3>{props.leader.name}</h3>}
        </>
    )
}

export default PartyLeader