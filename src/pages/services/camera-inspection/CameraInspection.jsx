import Banner from "../../../components/banner/Banner"

const CameraInspection = () => {
  return (
    <section className="camera-inspection">
      <Banner 
        bannerOverview={'Visualize into Your Borehole'}
        bannerTitle={'Borehole Camera Inspection Services'}
        bannerDescription={`By inserting a high-resolution camera into your borehole, we can identify any obstructions, damages, or other issues that may be affecting your water system. With this information, we can recommend the most effective solutions to restore your borehole to optimal performance.`}
        bannerContact={'Get in Touch'}      
      />
    </section>
  )
}

export default CameraInspection