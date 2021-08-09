<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
<div class="contentpanel">
  
    <div class="row">
        <div class="col-sm-3 col-md-3 col-lg-2">
            <a href="#" data-toggle="modal" data-target="#create_ticket_modal" class="btn btn-success btn-block btn-create-msg">Create Tickets</a>
            <br>
            
            <ul class="nav nav-pills nav-stacked nav-msg">
                <li class="">
                <a href="#my-tickets" data-toggle="tab">
                    <span class="badge pull-right">0</span>
                    <i class="glyphicon glyphicon-inbox"></i> My Tickets
                </a>
                </li>
                <li class=""><a href="#BD_onboarding" data-toggle="tab"><i class="glyphicon glyphicon-star"></i> My Assignees</a></li>
                <li class=""><a href="#closed-tickets" data-toggle="tab"><i class="glyphicon  glyphicon-saved"></i> Closed Tickets</a></li>
                <li class="active"><a href="#action-items-tickets" data-toggle="tab"><i class="glyphicon  glyphicon-saved"></i> Action Items</a></li>
                <li class=""><a href="#withdrawal-tickets" data-toggle="tab"><i class="glyphicon  glyphicon-saved"></i> Withdrawal Tickets</a></li>
              
            </ul>
            
         
        </div>
        
        <div class="col-sm-9 col-md-9 col-lg-10 tab-content" style="border: 0px">
            <div id="my-tickets" class="tab-pane fade">   
                <div class="msg-header">
                    
                    <div class="pull-left col-sm-10" style="margin-left: 10%">
                        <div class="">
                            <label class="col-sm-2" style="line-height: 40px; height: 40px">Filter Tickets </label>
                            <div class="col-sm-8">
                                <select name="my_tickets_filter" required="" class="form-control">
                                    <option value="ALL">All Assigned To me</option>
                                    <option value="DIRECT">Direct Ticket</option>
                                                                            <option value="KE002"> WESTLANDS HOTELS LIMITED STAFF RETIREMENT BENEFITS SCHEME - KE002 </option> 
                                                                                <option value="KE004"> KIANDA SCHOOL STAFF RETIREMENT BENEFITS SCHEME - KE004 </option> 
                                                                                <option value="KE005"> OCTAGON UMBRELLA RETIREMENT BENEFITS SCHEME - KE005 </option> 
                                                                        </select>
                            </div>
                        </div>
                            
                        
                    </div><!-- pull-left -->
                </div><!-- msg-header -->
                
                <ul class="media-list msg-list">
                    <div class="row" style="width: 100%; text-align: center"> <div style="margin: 30px 25%">You have not assigned anyone a tickets.</div></div>                    
                
                </ul>
            </div> <!-- my tickets -->
            
            
            
            
            <div id="action-items-tickets" class="tab-pane fade active in">   
                <div class="msg-header">
                    
                    <div class="pull-left col-sm-10" style="margin-left: 10%">
                        <div class="">
                            <label class="col-sm-2" style="line-height: 40px; height: 40px">Filter Tickets </label>
                            <div class="col-sm-8">
                                <select name="my_tickets_filter" required="" class="form-control">
                                    <option value="ALL">All Assigned To me</option>
                                    <option value="DIRECT">Direct Ticket</option>
                                                                            <option value="KE002"> WESTLANDS HOTELS LIMITED STAFF RETIREMENT BENEFITS SCHEME - KE002 </option> 
                                                                                <option value="KE004"> KIANDA SCHOOL STAFF RETIREMENT BENEFITS SCHEME - KE004 </option> 
                                                                                <option value="KE005"> OCTAGON UMBRELLA RETIREMENT BENEFITS SCHEME - KE005 </option> 
                                </select></div>
                        </div>
                            
                        
                    </div><!-- pull-left -->
                </div><!-- msg-header -->
                
                <ul class="media-list msg-list">
                    <div class="row" style="width: 100%; text-align: center"> <div style="margin: 30px 25%">You have not assigned anyone a tickets.</div></div>                    
                
                </ul>
            </div> <!-- action items tickets -->
            
            
            <div id="withdrawal-tickets" class="tab-pane fade">   
                <div class="msg-header">
                    
                    <div class="pull-left col-sm-10" style="margin-left: 10%">
                        <div class="">
                            <label class="col-sm-2" style="line-height: 40px; height: 40px">Filter Tickets </label>
                            <div class="col-sm-8">
                                <select name="my_tickets_filter" required="" class="form-control">
                                    <option value="ALL">All Assigned To me</option>
                                    <option value="DIRECT">Direct Ticket</option>
                                                                            <option value="KE002"> WESTLANDS HOTELS LIMITED STAFF RETIREMENT BENEFITS SCHEME - KE002 </option> 
                                                                                <option value="KE004"> KIANDA SCHOOL STAFF RETIREMENT BENEFITS SCHEME - KE004 </option> 
                                                                                <option value="KE005"> OCTAGON UMBRELLA RETIREMENT BENEFITS SCHEME - KE005 </option> 
                                                                        </select>
                            </div>
                        </div>
                            
                        
                    </div><!-- pull-left -->
                </div><!-- msg-header -->
                
                <ul class="media-list msg-list">
                    <div class="row" style="width: 100%; text-align: center"> <div style="margin: 30px 25%">You have not assigned anyone a tickets.</div></div>                    
                
                </ul>
            </div> <!-- withdrawal tickets -->
            

            <div id="my-assignees" class="tab-pane fade">   
                <div class="msg-header">
                    
                    <div class="pull-left col-sm-10" style="margin-left: 10%">
                        <div class="">
                            <label class="col-sm-2" style="line-height: 40px; height: 40px">Filter Tickets </label>
                            <div class="col-sm-8">
                                <select name="my_tickets_filter" required="" class="form-control">
                                    <option value="ALL">All Tickets I Have Assigned</option>
                                    <option value="DIRECT">Direct Ticket</option>
                                                                            <option value="KE002"> WESTLANDS HOTELS LIMITED STAFF RETIREMENT BENEFITS SCHEME - KE002 </option> 
                                                                                <option value="KE004"> KIANDA SCHOOL STAFF RETIREMENT BENEFITS SCHEME - KE004 </option> 
                                                                                <option value="KE005"> OCTAGON UMBRELLA RETIREMENT BENEFITS SCHEME - KE005 </option> 
                                                                        </select>
                            </div>
                        </div>
                        
                            
                        
                        
                    </div><!-- pull-left -->
                </div><!-- msg-header -->
                
                <ul class="media-list msg-list">
                    <div class="row" style="width: 100%; text-align: center"> <div style="margin: 30px 25%">You have not assigned anyone a tickets.</div></div>                    
                
                </ul>
            </div> <!-- my-assignees -->

            <div id="closed-tickets" class="tab-pane fade">   
                <div class="msg-header">
                    
                    <div class="pull-left col-sm-10" style="margin-left: 10%">
                        <div class="">
                            <label class="col-sm-2" style="line-height: 40px; height: 40px">Filter Tickets </label>
                            <div class="col-sm-8">
                                <select name="my_tickets_filter" required="" class="form-control">
                                    <option value="ALL">All Closed Tickets</option>
                                    <option value="DIRECT">Direct Ticket</option>
                                                                            <option value="KE002"> WESTLANDS HOTELS LIMITED STAFF RETIREMENT BENEFITS SCHEME - KE002 </option> 
                                                                                <option value="KE004"> KIANDA SCHOOL STAFF RETIREMENT BENEFITS SCHEME - KE004 </option> 
                                                                                <option value="KE005"> OCTAGON UMBRELLA RETIREMENT BENEFITS SCHEME - KE005 </option> 
                                                                                <option value="KE006"> LUTHERAN WORLD FEDERATION STAFF PROVIDENT FUND - KE006 </option> 
                                                                                <option value="KE007"> THE AFRICAN ADVANCED LEVEL TELECOMMUNICATIONS INSTITUTE SPF - KE007 </option> 
                                                                                <option value="KE008"> EQUATOR BOTTLERS LIMITED STAFF PENSION SCHEME - KE008 </option> 
                                                                                <option value="KE009"> Octagon Umbrella Retirement Benefits Scheme - KE009 </option> 
                                                                                <option value="KE012"> I&amp;M BANK LIMITED STAFF PROVIDENT FUND - KE012 </option> 
                                                                                <option value="KE013"> ALL AFRICA CONFERENCE OF CHURCHES STAFF PROVIDENT FUND - KE013 </option> 
                                                                                <option value="KE015"> TRANSNATION SACCO LIMITED SPF - KE015 </option> 
                                                                                <option value="KE018"> CIC INSURANCE GROUP LIMITED SRBS - KE018 </option> 
                                                                                <option value="KE020"> JUHUDI KILIMO STAFF PROVIDENT FUND - KE020 </option> 
                                                                                <option value="KE023"> UNIVERSITY OF KABIANGA STAFF RETIREMENT BENEFITS SCHEME - KE023 </option> 
                                                                                <option value="KE024"> NATIONAL HOUSING CORPORATION SRBS - KE024 </option> 
                                                                                <option value="KE025"> KENYA NATIONAL BUREAU OF STATISTICS STAFF RETIREMENT BENEFITS SCHEME - KE025 </option> 
                                                                                <option value="KE027"> HARAMBEE SACCO STAFF PROVIDENT FUND - KE027 </option> 
                                                                                <option value="KE028"> CATHOLIC DIOCESE OF KITUI STAFF PROVIDENT FUND - KE028 </option> 
                                                                                <option value="KE029"> ACADEMIC SERVICES LIMITED STAFF PROVIDENT FUND - KE029 </option> 
                                                                        </select>
                            </div>
                        </div>
                        
                        
                    
                    </div><!-- pull-left -->
                </div><!-- msg-header -->
                
                <ul class="media-list msg-list">
                    <div class="row" style="width: 100%; text-align: center"> <div style="margin: 30px 25%">You have no closed tickets.</div></div>                    
                </ul>
            </div>  <!-- closed tickets -->
        </div><!-- tab contents -->

    </div>
</div>
</card>
</base-header>
</template>