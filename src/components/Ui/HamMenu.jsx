export const HamMenu = ({ open, setOpen }) => {
  return (
    <div onClick={() => setOpen(!open)} className="flex flex-col items-center justify-around w-6 h-6 top-0 gap-1 relative z-50">
      <div className={`h-1 w-full bg-light-primary rounded-md origin-center transition-all ${open ? 'rotate-45 translate-y-2' : undefined}`}></div>
      <div className={`h-1 w-full bg-light-primary rounded-md origin-center transition-all ${open ? 'opacity-0' : undefined}`}></div>
      <div className={`h-1 w-full bg-light-primary rounded-md origin-center transition-all ${open ? '-rotate-45 -translate-y-2.5' : undefined}`}></div>
    </div>
  )
}
