﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Pomelo.DevOps.Models.ViewModels;
using Pomelo.Workflow.Models.EntityFramework;
using YamlDotNet.Serialization;

namespace Pomelo.DevOps.Models
{
    public enum PipelineType
    { 
        Linear,
        Diagram
    }

    public class Pipeline
    {
        [YamlIgnore]
        [MaxLength(64)]
        public string Id { get; set; }

        [YamlIgnore]
        [MaxLength(64)]
        [ForeignKey(nameof(Project))]
        public string ProjectId { get; set; }

        [YamlIgnore]
        [Newtonsoft.Json.JsonIgnore]
        public virtual Project Project { get; set; }

        [YamlIgnore]
        [ForeignKey(nameof(User))]
        public Guid UserId { get; set; }

        [YamlIgnore]
        public virtual User User { get; set; }

        [YamlIgnore]
        public string Name { get; set; }

        [YamlIgnore]
        public PipelineType Type { get; set; }

        [YamlIgnore]
        public PipelineVisibility Visibility { get; set; }

        [YamlIgnore]
        public string PipelineBody { get; set; } = ""; // For linear pipeline

        [YamlIgnore]
        [ForeignKey(nameof(Workflow))]
        public Guid? WorkflowId { get; set; } // For diagram pipeline

        [YamlIgnore]
        public virtual DbWorkflow Workflow { get; set; } // For diagram pipeline

        [YamlIgnore]
        [Newtonsoft.Json.JsonIgnore]
        public virtual ICollection<PipelineTrigger> Triggers { get; set; }

        [YamlIgnore]
        public virtual ICollection<Job> Jobs { get; set; }

        [YamlIgnore]
        [Newtonsoft.Json.JsonIgnore]
        public virtual ICollection<PipelineAccess> Accesses { get; set; }

        [YamlIgnore]
        [Newtonsoft.Json.JsonIgnore]
        public virtual ICollection<PipelineDiagramStage> Stages { get; set; }
    }
}
