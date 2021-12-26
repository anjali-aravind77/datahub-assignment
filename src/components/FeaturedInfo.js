import "./featuredinfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem" style={{"background-color":"rgb(50, 100, 238)"}}>
        <span className="featuredTitle">Total Income</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$ 673,65</span>         
        </div>
        <span className="featuredSub">Saved 20%</span>
       
      </div>
      <div className="featuredItem" style={{"background-color":"rgb(97, 173, 245)"}}>
        <span className="featuredTitle">Total Expenses</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$477,415</span>
         
        </div>
        <span className="featuredSub">Saved 20%</span>
      </div>
      <div className="featuredItem" style={{"background-color":"rgb(241, 78, 228)"}}>
        <span className="featuredTitle">Cash on hand</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
         
        </div>
        <span className="featuredSub">Saved 20%</span>
      </div>
      <div className="featuredItem" style={{"background-color":"rgb(119, 224, 119)"}}>
        <span className="featuredTitle">Net Profit Margin</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$277,225</span>
         
        </div>
        <span className="featuredSub">Saved 20%</span>
      </div>
    </div>
  );
}