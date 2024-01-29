<div style={{color:props.mode==='black'?'white':'black',backgroundColor:props.mode==='black'?'red':'white'}} className='container'>

<div className='container  my-4' >

<h1 style={{display:""}} className='py-2'>{props.heading}</h1>
<div className='container'>
  <textarea className="form-control " id="text_convert" rows="10"  value={text} onChange={handlechange}  ></textarea>
  <button disabled={text.length==0} type="button" className="btn btn-primary mt-2 mx-1" onClick={handleupclick}>update_uptext</button>
  <button disabled={text.length==0}  type="button" className="btn btn-primary mt-2 mx-2" onClick={handleloclick}>update_lotext</button>
  <button disabled={text.length==0}  type="button" className="btn btn-primary mt-2 mx-2" onClick={handlecopy}>copy_text</button>
  <button disabled={text.length==0}  type="button" className="btn btn-primary mt-2 mx-2" onClick={handlereverse}>reverse_text</button>
</div>
<div className='container mb-5 mt-4'>
    <form className="example" >
  <input type="text" placeholder="Search.." value={pattern} onChange={handlePattern} className="inpt"/>
  <button type="submit"  onClick={handleSearch}><i className="fa fa-search"></i></button>
  </form>
</div>
</div>
<div className='container mt-4' >
    <h1 style={{display:"inline"}} className=''>text summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0?element.length:0}).length} words,  {text.length} characters</p>
    <h2 > Preview</h2>
    <p style={{color:'red'}}>{text.length>0?text:'nothing to preview'}</p>


</div>
</div>
 