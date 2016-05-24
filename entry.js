//require("./style.css");
import ImageLoader from './ImageLoader.js';





let loader=new ImageLoader();
{
  $(".progress").hide();
  loader.on(document.getElementById("progressbar"));

}


const images={
  'cube':'http://www.deke.com/files/images/blog-20130723-DT%20cube/07-cube.jpg',
  'vase1':'https://65e226e929a5af0b2a5c-b2b05f995fc8916f7d7814d5d83ccb0d.ssl.cf3.rackcdn.com/products/1000/flower-posy-vase.jpg',
  'vase2':'http://www.wedgwood.com/media/catalog/product/cache/4/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/w/e/wedgwood-barlaston-vases-butterfly-bloom-shaped-vase-091574209814.jpg',
  'vase3':'https://secure.img1.wfrcdn.com/lf/maxsquare/hash/22527/17580398/1/Embossed%2BFleur%2BVase.jpg',
  'vase4':'http://www.wedgwood.co.uk/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/w/e/wedgwood-barlaston-vases-pashmina-shaped-vase-091574209760.jpg',
  'vase5':'http://st.hzcdn.com/fimgs/10619ba206422afd_7023-w233-h233-b1-p10--rustic-vases.jpg',
  'vase6':'http://www.georgjensen.com/~/productimages/1200/0/0/3586198/ALFREDO-vase-light-green.png',
  'vase7':'https://static.petersofkensington.com.au/images/ProductImages/530295-Zoom.jpg',
  'vase8':'http://cdn.earthporm.com/wp-content/uploads/2015/04/ocean-wave-vases-desomma-blaker-1.jpg',
  'vase9':'http://images.crateandbarrel.com/is/image/Crate/ChickadeeVaseGrpS16',
  'vase10':'http://www.emmabridgewater.co.uk/content/ebiz/eb/invt/1rab010105/1rab010105_l.jpg',
  'vase11':'https://cdn.thingiverse.com/renders/24/b3/50/3f/b0/Julia_Vase_011_-_Heat_Wave_preview_featured.jpg',
  'vase12':'http://www.panik-design.com/acatalog/b-pop-up-menu-4737639.jpg',
  'vase13':'http://www.fabulousflowers.biz/images/uploads/TableVase.jpg',
  'vase14':'http://ak1.ostkcdn.com/images/products/6309072/Swetheart-Iron-Heart-shaped-Bud-Vase-P13937798.jpg',
  'vase15':'http://www.bohaglass.co.uk/wp-content/uploads/2013/04/marian-pyrcak-hand-blown-decorative-art-glass-vase.jpg'
}




$("#loadPic").click(()=>{

  $(".progress").show();
  loader.load(images);

});


