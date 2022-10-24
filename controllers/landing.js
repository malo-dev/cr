exports.get_landing = function(req, res, next) {
  res.render('landing', { title: 'malo' });
}
exports.submit_lead = function (req, res, next) {
  res.redirect('/')
 console.log("lead email : ",req.body.lead_email )
}