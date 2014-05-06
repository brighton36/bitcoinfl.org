class County
  attr_accessor :label, :url

  def initialize(attrs = {})
    attrs.each_pair{|k,v| instance_variable_set ['@',k].join, v }
  end
end
