interface FoodImageProps {
  variant: string
  className?: string
}

export function FoodImage({ variant, className = '' }: FoodImageProps) {
  return (
    <div className={`food-image ${variant} ${className}`} aria-hidden="true">
      <div className="food-glow" />
      <div className="food-object" />
    </div>
  )
}
