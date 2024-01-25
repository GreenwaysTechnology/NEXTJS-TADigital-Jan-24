export default function GameLayout(props) {
    return <div id="gamelayout">
        {/* Game Page Content */}
        {props.children}
        {/* Team Page Content */}
        {props.team}
        {/* Anaylytics Page Content */}
        {props.anaylitics}
    </div>
}