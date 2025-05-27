export default function MyButton({text, onClickFn}) {
    return (
        <button onClick={onClickFn}>{text}</button>
    );
}