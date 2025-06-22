function Container({ children, className = '' }) {
  return (
    <div className={`max-w-content mx-auto px-8 ${className}`}>
      {children}
    </div>
  )
}

export default Container