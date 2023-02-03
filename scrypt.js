<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
      <script id="rendered-js" >
        
$("#slider").on("input change", e => {
  const sliderPos = e.target.value;
  // Update the width of the foreground image
  $('.foreground-img').css('width', `${sliderPos}%`);
  // Update the position of the slider button
  $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`);
});
 </script>
