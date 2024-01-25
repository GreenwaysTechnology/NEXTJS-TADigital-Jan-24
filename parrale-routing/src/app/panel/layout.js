export default function PanelLayout(props) {
    const isAdmin = false
    return <div id="PanelLayout">
        {/* Panel Page content */}
        {props.children}
        {isAdmin ? props.AdminPanel : props.UserPanel}
    </div>
}