import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="21" y="245" rx="0" ry="0" width="235" height="32" /> 
    <rect x="5" y="292" rx="0" ry="0" width="265" height="70" /> 
    <rect x="7" y="386" rx="0" ry="0" width="109" height="42" /> 
    <rect x="122" y="376" rx="0" ry="0" width="141" height="59" /> 
    <circle cx="132" cy="114" r="114" />
  </ContentLoader>
)

export default Sceleton;