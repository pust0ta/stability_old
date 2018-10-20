    <div class="tabs"><!--product-description-table and body-->
      <!-- Nav sub-tabs (product description) -->
      <ul class="nav nav-tabs">
        <li class="active"><a href="#reviews-tab-1" data-toggle="tab"><?php print t('Overview'); ?></a></li>
        <li><a href="#reviews-tab-2" data-toggle="tab"><?php print t('Description'); ?></a></li>
      </ul>

      <!-- Tab panes (product description) -->
      <div class="tab-content">
        <div class="tab-pane fade in active" id="reviews-tab-1">
          <div class="table-responsive">
            <?php
            unset($content['field_main_description'], $content['field_rating'], $content['field_tags'], $content['field_catalog'], $content['field_antiprice'], $content['field_sku_autocomplete']);
              $rows = array();
              foreach($content as $key => $field){
                if(strpos($key, 'field') !== FALSE && !empty($field)){
                  $content[$key]['#label_display'] = 'hidden';
                  $values = array();
                  foreach(element_children($content[$key]) as $i) {
                    $values[] = render($content[$key][$i]);
                  }
                  $rows[] = array($content[$key]['#title'], implode('<br/>', $values));
                }
              }
              $weight = render($content['weight']);
              if($weight) {
                $rows[] = array(t('Weight'), $weight);
              }
              $dimensions = render($content['dimensions']);
              if($dimensions) {
                $rows[] = array(t('Dimensions'), $dimensions);
              }
              print theme('table', array('rows' => $rows, 'attributes' => array('class' => array('table table-striped'))));?>
          </div>
        </div>
        <div class="tab-pane fade" id="reviews-tab-2">
          <?php print render($content['body']); ?>
        </div> <!-- End sub-tabs content (product description) -->
      </div> <!-- End nav sub-tabs (product description) 'tab-content' -->
    </div> <!-- End sub-tabs (product description) -->