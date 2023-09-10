//Create Component Button and Text input use Atomic Desain
//use children and props for dinamis value

function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}
