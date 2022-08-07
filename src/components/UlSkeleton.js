import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
//END import

//React Component
//skeleton loading screen sized to match an unordered list containing 8 list items
function UlSkeleton() {
  return (
    <div style={{ padding: "10px" }}>
      {/*search box skeleton*/}
      <Skeleton
        style={{
          height: "24px",
          width: "20vw",
          marginLeft: 14,
          marginTop: 6,
        }}
      />

      {/*list skeleton*/}
      <Skeleton //first line in the list
        width={"42vw"}
        height={14}
        style={{ marginLeft: 14, marginTop: 12 }}
      />
      <Skeleton
        count={7} //remaining lines
        width={"42vw"}
        height={14}
        style={{ marginLeft: 14, marginTop: 7 }}
      />
    </div> //END container div
  );
}

export default UlSkeleton;
